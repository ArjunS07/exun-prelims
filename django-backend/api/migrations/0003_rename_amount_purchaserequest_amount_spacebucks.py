# Generated by Django 4.1.3 on 2022-11-08 04:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_purchaserequest_nft_token_purchaserequest_nft'),
    ]

    operations = [
        migrations.RenameField(
            model_name='purchaserequest',
            old_name='amount',
            new_name='amount_spacebucks',
        ),
    ]
