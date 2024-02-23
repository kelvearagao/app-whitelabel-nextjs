# App Nextjs Static Whitelabel

## CDN config

Basicamente a CDN vai adicionar o nome da marca depois do nome do hosts:

brand-a.com.br -> CDN -> whitelabel.com.br/brand-a
brand-b.com.br -> CDN -> whitelabel.com.br/brand-b
brand-c.com.br -> CDN -> whitelabel.com.br/brand-d

Quando o client passar algum path na chamada, a CDN vai concatenar o nome do host, da marca e do path.

brand-a.com.br/desktop/step/dados-pessoais -> whitelabel.com.br/brand-a/desktop/step/dados-pessoais

