import "./App.css";
import logo from "./assets/logo-gelootech.png";

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="logoContainer">
          <img src={logo} alt="GelooTech" className="logoImage" />
        </div>

        <nav>
          <a href="#recursos">Recursos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
          <button>Solicitar Demonstração</button>
        </nav>
      </header>

      <main className="hero">
        <div className="heroLeft">
          <section className="heroText">
            <span className="badge">ERP PARA DISTRIBUIDORAS</span>

            <h1>
              Controle sua distribuidora de bebidas{" "}
              <strong>sem planilhas e sem papel.</strong>
            </h1>

            <p>
              PDV, caixa, estoque, entregas, contas a receber e gestão completa
              em uma única plataforma.
            </p>

            <div className="actions">
              <button className="primary">Solicitar Demonstração</button>
              <button className="secondary">Conhecer Recursos</button>
            </div>

            <div className="checks">
              <span>✓ Fácil de usar</span>
              <span>✓ Suporte rápido</span>
              <span>✓ 100% na nuvem</span>
              <span>✓ Dados seguros</span>
            </div>
          </section>
        </div>

        <div className="heroRight">
          <section className="dashboard">
            <div className="dashHeader">
              <strong>GelooTech ERP</strong>
              <span>Distribuidora Exemplo</span>
            </div>

            <div className="dashBody">
              <aside>
                <p>Dashboard</p>
                <p>PDV</p>
                <p>Caixa</p>
                <p>Clientes</p>
                <p>Produtos</p>
                <p>Estoque</p>
                <p>Entregas</p>
                <p>Financeiro</p>
              </aside>

              <div className="dashContent">
                <h3>Dashboard</h3>
                <p>Visão geral do seu negócio</p>

                <div className="cards">
                  <div>
                    <span>Vendas do dia</span>
                    <strong>R$ 8.450,00</strong>
                    <small>+12,5% vs ontem</small>
                  </div>
                  <div>
                    <span>Pedidos</span>
                    <strong>42</strong>
                    <small>+8% vs ontem</small>
                  </div>
                  <div>
                    <span>Clientes ativos</span>
                    <strong>312</strong>
                    <small>+5% vs ontem</small>
                  </div>
                </div>

                <div className="chart">
                  <div className="chartBars">
                    <span data-value="35" data-day="Seg" style={{ height: "35%" }}></span>
                    <span data-value="55" data-day="Ter" style={{ height: "55%" }}></span>
                    <span data-value="45" data-day="Qua" style={{ height: "45%" }}></span>
                    <span data-value="70" data-day="Qui" style={{ height: "70%" }}></span>
                    <span data-value="62" data-day="Sex" style={{ height: "62%" }}></span>
                    <span data-value="88" data-day="Sáb" style={{ height: "88%" }}></span>
                    <span data-value="76" data-day="Dom" style={{ height: "76%" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="resources" id="recursos">
        <div id="beneficios"></div>
        <h2>Tudo que sua distribuidora precisa</h2>
        <p>Recursos completos para simplificar sua gestão.</p>

        <div className="resourceGrid">
          <div>
            <span>🛒</span>
            <h3>PDV Inteligente</h3>
            <p>Venda rápida com atalhos e múltiplas formas de pagamento.</p>
          </div>

          <div>
            <span>💰</span>
            <h3>Controle Financeiro</h3>
            <p>Caixa, fiado, cartões, contas a receber e fluxo de caixa.</p>
          </div>

          <div>
            <span>🚚</span>
            <h3>Gestão de Entregas</h3>
            <p>Controle de entregas, comprovantes e acompanhamento.</p>
          </div>

          <div>
            <span>📦</span>
            <h3>Estoque em Tempo Real</h3>
            <p>Acompanhe entradas, saídas e estoque mínimo automaticamente.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contactIntro">
          <span>Fale com nosso time</span>
          <h2>Atendimento via WhatsApp</h2>
          <p>
            Entre em contato diretamente com nossos especialistas para tirar dúvidas,
            solicitar demonstração ou receber suporte rápido.
          </p>
        </div>

        <div className="contactGrid">
          <a
            href="https://wa.me/554198428174"
            target="_blank"
            rel="noreferrer noopener"
          >
            <strong>Gabriel</strong>
            <span>41 9842-8174</span>
            <p>Atendimento comercial e demonstração do GelooTech ERP.</p>
          </a>

          <a
            href="https://wa.me/5541996573181"
            target="_blank"
            rel="noreferrer noopener"
          >
            <strong>Juliano</strong>
            <span>41 99657-3181</span>
            <p>Suporte e consultoria para a sua distribuidora.</p>
          </a>
        </div>
      </section>

      <div className="whatsappWidget">
        <a href="https://wa.me/554198428174" target="_blank" rel="noreferrer noopener">
          <span>💬</span>
          Fale com Gabriel no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;