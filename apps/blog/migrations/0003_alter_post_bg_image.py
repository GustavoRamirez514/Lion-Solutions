# Generated by Django 4.2 on 2023-04-17 22:01

import apps.blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='bg_image',
            field=models.ImageField(max_length=500, upload_to=apps.blog.models.blog_bg_img_directory),
        ),
    ]
