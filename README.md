## Github Actions
- https://github.blog/changelog/2023-09-22-github-actions-transitioning-from-node-16-to-node-20/
- https://docs.github.com/en/actions/learn-github-actions/variables

## Azure credentials CLI - Github Actions
- Criar aplicação:
https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal

- Na subscrição desejada adicionar acesso à aplicação criada:
https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application

- Criar client secret:
https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret

Guardar value do secret criado para próximo passo, apenas visível no momento da criação do secret.

- No GitHub actions criar AZURE_CREDENTIALS secret com:
```json
{
    "clientSecret": "",
    "subscriptionId": "",
    "tenantId": "",
    "clientId": ""
}
```

- clientSecret - criado no ponto anterior
- clientId - obtido na página a aplicação criada no ponto 1
- tenantId - obtido na página a aplicação criada no ponto 1
- subscriptionId - obtido na página da subscription no AzurePortal

### Steps nas GitHub actions

      - name: Azure login
        uses: azure/login@v2
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

Depois deste step conseguimos executar comandos com `az …`

### Fontes
- https://github.com/Azure/login
- https://github.com/marketplace/actions/azure-cli-action
- https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration?tabs=github-actions#build-configuration

### Azure cli delete environment
- https://learn.microsoft.com/en-us/cli/azure/staticwebapp/environment?view=azure-cli-latest#az-staticwebapp-environment-delete

### Outra possibilidade para monorepos a analisar:
- https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration?tabs=github-actions#monorepo-support

## Deploy static web app (swa cli)
- https://azure.github.io/static-web-apps-cli/docs/cli/swa

- Como criar Static Web Application (Azures Portal): https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github#create-a-static-web-app

- How to get token: https://azure.github.io/static-web-apps-cli/docs/cli/swa-deploy#deployment-token

- Deploy: https://azure.github.io/static-web-apps-cli/docs/cli/swa-deploy

exemplo: ```yarn swa deploy ./dist/apps/app-two --env production -d token-here```

#### SPA routes solução
Adicionar ficheiro ```staticwebapp.config.json``` onde vão ser executados os comandos para deploy (raiz neste caso):

```json
{
  "navigationFallback": {
    "rewrite": "index.html",
    "exclude": ["/images/*.{png,jpg,gif,ico}", "/*.{css,scss,js}"]
  }
}
```

## Artigo sobre Static Web Apps, Web Apps e Storage na Azure:
https://devblogs.microsoft.com/devops/comparing-azure-static-web-apps-vs-azure-webapps-vs-azure-blob-storage-static-sites/

## Notes
- Acho que vamos ter problemas com nome dos environment previews por causa de restrições no naming na azure como remover "-" e limit de caracteres curto.

TODO: procurar uma solução...
