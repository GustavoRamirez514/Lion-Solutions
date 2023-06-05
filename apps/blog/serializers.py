from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer


class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'bg_image',
            'description',
            'time_read',
            'published',
            'views',
            'category',
            'status',
        ]


class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    get_status=serializers.CharField(source='status')
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'bg_image',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
            'get_status',
        ]

