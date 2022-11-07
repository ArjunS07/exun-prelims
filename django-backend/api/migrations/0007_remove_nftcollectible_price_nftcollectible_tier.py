# Generated by Django 4.1.3 on 2022-11-07 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_rename_datetime_purchaserequest_datetime_sent_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nftcollectible',
            name='price',
        ),
        migrations.AddField(
            model_name='nftcollectible',
            name='tier',
            field=models.CharField(choices=[('TIER_1', 'Legendary'), ('TIER_2', 'Epic'), ('TIER_3', 'Rare'), ('TIER_4', 'Uncommon'), ('TIER_5', 'Common')], default='TIER_5', max_length=10),
        ),
    ]
