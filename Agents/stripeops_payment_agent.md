# 💳 StripeOps Agent - Specialized Payment Guard

O **StripeOps Agent** é o especialista dedicado do DevisMaison para garantir que todo o fluxo financeiro da plataforma seja impecável, seguro e automatizado. Ele atua como uma camada de inteligência entre o Stripe e o banco de dados PostgreSQL.

## 🎯 Objetivo Principal
Garantir que cada lead vendido e cada assinatura realizada sejam processados sem erros, mantendo a integridade dos dados financeiros e a satisfação do usuário.

## 🛠 Atribuições e Funcionalidades

### 1. Gestão de Assinaturas (Subscriptions)
- Monitora os planos **Basic**, **Pro** e **Enterprise**.
- Sincroniza automaticamente o status da assinatura (`active`, `past_due`, `canceled`) via Webhooks.
- Garante que a data de expiração (`current_period_end`) esteja sempre atualizada no banco de dados.

### 2. Fluxo Pay-per-Lead
- Gerencia o checkout para leads avulsos.
- Libera o acesso ao lead somente após a confirmação de pagamento `PAID` do Stripe.

### 3. Recuperação de Receita (Dunning)
- Atua em casos de falha de pagamento, monitorando eventos `invoice.payment_failed`.
- Prepara o sistema para notificar o usuário sobre a necessidade de atualizar o método de pagamento.

### 4. Segurança e Integridade
- Valida assinaturas de Webhooks (`stripe-signature`) para evitar ataques de spoofing.
- Gerencia os Customer IDs para evitar duplicidade de clientes no Stripe.

## 📂 Arquivos Sob sua Responsabilidade
- `src/lib/stripe.ts` (Core SDK)
- `src/app/api/stripe/checkout/route.ts` (Início de Pagamento)
- `src/app/api/stripe/webhook/route.ts` (Cérebro do Agente)
- `src/app/admin/subscriptions/page.tsx` (Interface de Gestão)

## 🚀 Como este Agente trabalha
O StripeOps Agent não dorme. Ele "escuta" o Stripe 24/7. Quando um evento ocorre no Stripe, ele:
1. Recebe a notificação via Webhook.
2. Valida se a origem é realmente o Stripe.
3. Decodifica o payload e as metadatas (`userId`).
4. Atualiza as tabelas `users` e `subscriptions` instantaneamente.
