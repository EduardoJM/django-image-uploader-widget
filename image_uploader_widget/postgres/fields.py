import datetime
from typing import Optional
import posixpath
from django.db.models import ImageField
from django.contrib.postgres.fields import ArrayField
from django.db.models.fields.files import FieldFile
from django.core.files.storage import default_storage, Storage
from django.core.files.utils import validate_file_name
from .forms import ImageListFormField

class ImageListField(ArrayField):
    def __init__(
        self,
        *args,
        max_length: int = 150,
        storage: Optional[Storage] = None,
        upload_to: str = "",
        **kwargs
    ):
        self.max_length = max_length
        self.storage = storage or default_storage
        self.upload_to = upload_to or ""
        kwargs['base_field'] = ImageField(max_length=max_length)
        super().__init__(
            *args,
            **kwargs,
        )

    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        path = "image_uploader_widget.postgres.fields.ImageListField"
        kwargs.update(
            {
                "base_field": self.base_field.clone(),
                "size": self.size,
                "max_length": self.max_length,
                "upload_to": self.upload_to,
            }
        )
        return name, path, args, kwargs
    
    def generate_filename(self, instance, filename):
        """
        Apply (if callable) or prepend (if a string) upload_to to the filename,
        then delegate further processing of the name to the storage backend.
        Until the storage layer, all file paths are expected to be Unix style
        (with forward slashes).
        """
        if callable(self.upload_to):
            filename = self.upload_to(instance, filename)
        else:
            dirname = datetime.datetime.now().strftime(str(self.upload_to))
            filename = posixpath.join(dirname, filename)
        filename = validate_file_name(filename, allow_relative_path=True)
        # TODO: fix filename problem in the future.
        return self.storage.generate_filename(filename)
    
    def _get_file(self, instance, file):
        print("VAMOS PEGAR O ARQUIVO")
        print(type(file))
        if isinstance(file, str):
            print("CAIU AQUI")
            return FieldFile(instance, self, file)
        
        print("OIE")
        field_file = FieldFile(instance, self, file.name)
        field_file.file = file
        field_file._committed = False
        return field_file

    def pre_save(self, model_instance, add):
        value = super().pre_save(model_instance, add)
        value = [self._get_file(model_instance, item) for item in value]

        for file in value:
            if file and not file._committed:
                file.save(file.name, file.file, save=False)

        print("PRE_SAVE??")
        print(value)
        return value
    
    def save_form_data(self, instance, data):
        if not data:
            data = []
        return super().save_form_data(instance, data)

    def formfield(self, **kwargs):
        return super().formfield(
            **{
                "form_class": ImageListFormField,
                **kwargs,
            }
        )
