# 🧪 Plano de Testes - StripeOps Agent

Para garantir que o agente de pagamentos está operando corretamente, siga este roteiro de testes.

## 1. Teste de Assinatura (Subscriptions)
1. Acesse o dashboard como ADMIN.
2. Vá em **Plans & Abonnements**.
3. Clique em **Choisir** para o plano "Pro".
4. Verifique se foi redirecionado para `checkout.stripe.com`.
5. Use um cartão de teste do Stripe (ex: 4242...).
6. Após o pagamento, verifique se retornou para a página com `success=true`.

## 2. Teste de Compra de Lead (Pay-per-Lead)
1. Acesse o dashboard como ENTREPRISE.
2. Escolha um lead disponível e clique em **Acheter ce lead**.
3. Verifique se o redirecionamento ocorre corretamente para um pagamento único (One-time payment).
4. Após o pagamento, verifique se os contatos do cliente (Email/Telefone) foram desbloqueados no dashboard.

## 3. Simulação de Webhooks (Local)
Abra um terminal e inicie o encaminhamento do Stripe:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Em outro terminal, dispare os eventos para testar o Agente:

### Testar Sucesso de Assinatura:
```bash
stripe trigger checkout.session.completed
```

### Testar Falha de Pagamento (Dunning):
```bash
stripe trigger invoice.payment_failed
```

## 4. Verificação no Banco de Dados
Execute a consulta para garantir que os dados foram persistidos:
```sql
SELECT * FROM subscriptions;
SELECT * FROM lead_assignments WHERE payment_status = 'PAID';
```
