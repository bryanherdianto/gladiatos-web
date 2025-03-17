# gladiatos-web

To see django website, run the following command:

```bash
cd myproject
python manage.py runserver
```

In another terminal, run the following command to start the frontend:

```bash
cd myproject
python manage.py tailwind install
python manage.py tailwind start
```

To upload to vercel, you first need to change the static tags from django to vercel. You can do this by running the following command:

```bash
cd gladiatos_web
python replace_static_tags.py .\myproject\myapp\templates\index.html .\myproject\theme\static\templates\index.html myproject/theme/static
```

You can deploy to vercel just by commiting to the main branch. The website will be available at https://gladiatos.vercel.app.
