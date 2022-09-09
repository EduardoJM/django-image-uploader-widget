# Generated by Django 4.1 on 2022-09-09 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('demo_application', '0006_testrequired'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestRequiredInline',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Test Required Inline',
            },
        ),
        migrations.CreateModel(
            name='TestRequiredInlineItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='', verbose_name='Image')),
                ('parent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='demo_application.testrequiredinline')),
            ],
        ),
    ]
