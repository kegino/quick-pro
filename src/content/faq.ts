export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o Lotus IPTV e como funciona?",
    a: "Lotus IPTV é uma assinatura de IPTV premium que transmite mais de 30.000 canais ao vivo, filmes e séries em 4K, Full HD e HD direto pela internet. O acesso chega por WhatsApp: você instala o aplicativo no seu aparelho, importa a lista enviada e assiste em minutos.",
  },
  {
    q: "O Lotus IPTV trava ou tem buffering?",
    a: "Não. A transmissão roda em servidores H265 de alta performance com CDN dedicada no Brasil, o que mantém a imagem fluida mesmo nos horários de maior audiência, como clássicos de futebol.",
  },
  {
    q: "Em quais aparelhos o Lotus IPTV funciona?",
    a: "Compatível com Smart TV (Samsung, LG, Roku e Android TV), TV Box, Fire Stick, celulares Android e iPhone, computadores e receptores MAG. Aceita listas M3U e os protocolos HLS, MPEGTS e RTMP.",
  },
  {
    q: "Posso testar o Lotus IPTV antes de assinar?",
    a: "Pode. O teste grátis libera o catálogo completo para você validar estabilidade, qualidade 4K e variedade de canais antes de fechar qualquer plano — basta pedir pelo WhatsApp.",
  },
  {
    q: "Como faço para pagar e ativar meu plano?",
    a: "Todo o processo acontece no WhatsApp: você escolhe o plano, paga por Pix, cartão ou boleto através do link oficial e recebe o acesso ativado em poucos minutos, junto com o passo a passo de instalação.",
  },
  {
    q: "O Lotus IPTV oferece suporte após a compra?",
    a: "Sim. Atendimento humano todos os dias pelo WhatsApp, cobrindo instalação do player, configuração da lista, ajustes de qualidade e dúvidas sobre a renovação do seu acesso.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Quantos dispositivos posso usar ao mesmo tempo?",
    a: "Cada plano Lotus IPTV acompanha uma conexão simultânea. Caso precise de mais telas, é possível adicionar pontos extras pelo mesmo WhatsApp do atendimento.",
  },
  {
    q: "Preciso de internet rápida para usar Lotus IPTV?",
    a: "O mínimo recomendado é 15 Mbps para conteúdo em HD e 30 Mbps para 4K. Conexão via cabo Ethernet oferece a experiência mais estável, mas o Wi-Fi 5 GHz também funciona bem.",
  },
  {
    q: "O Lotus IPTV é legal?",
    a: "O Lotus IPTV é um serviço de distribuição de listas de acesso, e cabe ao cliente utilizar o conteúdo de acordo com a legislação vigente no país.",
  },
  {
    q: "Como renovar meu plano Lotus IPTV?",
    a: "Chame no WhatsApp alguns dias antes do vencimento. A renovação é imediata e mantém todas as suas configurações, favoritos e organização de canais.",
  },
];
