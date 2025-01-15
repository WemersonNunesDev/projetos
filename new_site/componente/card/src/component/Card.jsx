import styles from '../index.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <h2>{props.name}</h2>
                <h2>{props.age}</h2>
            </div>

            <div className={styles.description}>
                <h4>✨ Oi, pessoal! Bem-vindos ao meu mundo! 🌟</h4>

                <p>
                    Sou Luana Oliveira, alguém que acredita que a vida é feita de histórias bem contadas e momentos inesquecíveis. ✨ Quando não estou com uma xícara de café na mão ☕, estou explorando novas ideias, descobrindo playlists incríveis de indie folk 🎶, ou tentando capturar o pôr do sol perfeito em fotos 📸.
                </p>

                <h4>💡 Quem sou eu?</h4>

                <ul>
                    <li>Uma eterna curiosa que adora aprender sobre desenvolvimento pessoal e criatividade.</li>
                    <li>Apaixonada por escrita, arte e culinária experimental (sim, já queimei muitos bolos tentando ser inovadora).</li>
                    <li>Alguém que valoriza conversas profundas, mas também sabe rir de piadas ruins (especialidade minha, aliás). 😂</li>
                </ul>

                <p>
                    💬 Por aqui, você vai encontrar:

                    <ul>
                        <li>👉 Reflexões sobre a vida, dicas de livros e ideias para dias mais produtivos.</li>
                        <li>👉 Momentos do meu dia a dia (spoiler: minha gata Luna costuma ser a estrela 🐾).</li>
                        <li>👉 Inspiração para quem quer transformar a rotina em algo leve e criativo.</li>
                        <li>🌈 Vamos juntos explorar, compartilhar e criar conexões reais? Se você também gosta de leitura, viagens e um bom cappuccino, já somos praticamente melhores amigos(as)! 💜</li>
                    </ul>
                </p>

                <p>
                    Me conta aqui nos comentários: qual é o seu maior sonho ou o hobby que você não vive sem? Estou ansiosa para conhecer você!
                </p>

                <p>#PrazerEmConhecer #NovosCaminhos #VemComigo</p>
            </div>
        </div>
    )
}

export default Card;