# 🚀 Guia de Configuração Produção - Stripe

Como seu **StripeOps Agent**, preparei os passos exatos que você deve seguir no painel do Stripe para colocar o sistema no ar.

## 1. Pagamentos de Leads (Dinâmicos)
Diferente dos planos mensais, os **Leads não precisam ser criados como produtos no Stripe**. O Agente envia o preço (CHF 30, 50 ou 80) dinamicamente com base no que você configurar no seu Painel Admin.

Isso evita que seu Stripe fique poluído com planos de outros projetos.

## 2. Assinaturas Mensais (Opcional)
Se você for usar os planos **Basic**, **Pro** e **Enterprise**, siga os passos abaixo. Se não for usar, pode ignorar esta parte:
1.  Acesse **Produtos** > **Adicionar produto**.
...

## 2. Configurar o Webhook de Produção
Para o Stripe avisar seu site quando um pagamento for feito:

1.  No Stripe, vá em **Desenvolvedores** > **Webhooks**.
2.  Clique em **Adicionar endpoint**.
3.  **URL do endpoint**: `https://seu-dominio.com/api/stripe/webhook`
4.  **Versão**: Selecione a mais recente.
5.  **Eventos para enviar**:
    *   `checkout.session.completed`
    *   `customer.subscription.updated`
    *   `customer.subscription.deleted`
    *   `invoice.payment_succeeded`
    *   `invoice.payment_failed`
6.  Clique em **Adicionar endpoint**.

## 3. Pegar o Segredo do Webhook
1.  Após criar, clique em **Revelar** em "Segredo de assinatura".
2.  Copie o valor (começa com `whsec_...`).
3.  Coloque este valor na variável `STRIPE_WEBHOOK_SECRET` do seu `.env.local`.

## 4. Configurar o Portal do Cliente
Para que o botão "Gérer mon abonnement" funcione:
1.  Vá em **Configurações** (engrenagem) > **Billing** > **Customer Portal**.
2.  Ative as permissões que desejar (cancelamento, troca de plano, etc).
3.  Clique em **Salvar**.

---
**Dica do Agente:** Recomendo fazer esses passos primeiro no modo **Test Mode** (chave ativada no topo do Stripe) para validar tudo antes de mudar para as chaves `pk_live_...` e `sk_live_...`.
