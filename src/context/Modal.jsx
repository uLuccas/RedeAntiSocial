// import React, { createContext, useState } from "react";

// export const ModalContext = createContext();




// export const ModalProvider = ({ children }) => {


//     const [modalConfigIsOpen, setIsOpenConfig] = useState(false);


//     return (
//         <ModalContext.Provider
//             value={{ modalConfigIsOpen, setIsOpenConfig }}>
//             {children}
//             <Modal
//                 isOpen={modalConfigIsOpen}
//                 onRequestClose={closeModalConfig}
//                 className="config-modal">
//                 <div id="config-card">
//                     <div id="closeButton">
//                         <img src="/close-icon.svg" alt="close-icon" className="closeButton" onClick={closeModalConfig} />
//                     </div>
//                     <h3 className="nome-usuario-config">Darth Vader da Silva</h3>
//                     <div id="foto-usuario-card" style={{ backgroundImage: `url(${usuarioImagem})` }} />
//                     <h4>Editar foto de perfil</h4>
//                     <div id="botoes-fotos-config">
//                         <button className="botoes-fotos-config">Carregar foto</button>
//                         <button className="botoes-fotos-config">Deletar foto</button>
//                     </div>
//                     <div id="foto-capa-config" style={{ backgroundImage: `url(${usuarioCapa})` }} />
//                     <h4>Editar foto de capa</h4>
//                     <div id="botoes-fotos-config">
//                         <button className="botoes-fotos-config">Carregar foto</button>
//                         <button className="botoes-fotos-config">Deletar foto</button>
//                     </div>
//                     <div id="alinhar-config">
//                         <div></div>
//                         <label>
//                             <img src="/location.svg" className="icon-config" />
//                             <b>Residência:</b><input type="text" className="input-config" placeholder="Estrela da morte" /></label>
//                     </div>
//                     <div id="alinhar-config">
//                         <div></div>
//                         <label><img src="/home-icon.svg" className="icon-config" />
//                             <b>Natural de:</b><input type="text" className="input-config" placeholder="Tatooine" /></label>
//                         <div></div>
//                     </div>
//                     <div id="alinhar-config">
//                         <label><img src="/heart.svg" className="icon-config" />
//                             <b>Estado civil:</b> <input type="text" className="input-config" placeholder="Viúvo" /></label>
//                         <div></div>
//                     </div>
//                     <div id="alinhar-config">
//                         <label><img src="/birth.svg" className="icon-config" />
//                             <b>Nascimento: </b><input type="text" className="input-config" placeholder="42 anos antes da batalha de Yala" /></label>
//                     </div>
//                     <h4>Sobre mim</h4>
//                     <p>
//                         <textarea type="text" id="sobre-mim-config" placeholder="Saudações, bem, me chamo Darth Vader da Silva Skywalker. Sou pai de dois filhos, eu acho, e sou divorciado.Estou a procura de novas inimizades, preciso destilar meu ódio em outros planetas. Posso agregar nossa inimizade com bombas, armas capazes de aniquilar planetas e afins. Se vier com papo de força eu não respondo, odeio crentes." />
//                     </p>
//                     <div id="botoes">
//                         <button id="botao-salvar-config">Salvar Dados</button>
//                         <button id="botao-desativar-config">Desativar Perfil</button>
//                     </div>
//                 </div>
//             </Modal>
//         </ModalContext.Provider>
//     )


// };
