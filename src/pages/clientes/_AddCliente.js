import { useEffect } from "react"
import { useState } from "react"

function FormCliente(props) {

    let propsData = props.cliente

    console.log(propsData)

    return (
        <div className="modal fade" id="modal-lg">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Cadastro de Usuário</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        {/* FORM */}
                        <form>
                            <div className="card-body">

                                <div className="form-group">
                                    <label htmlFor="InputNome">Nome</label>
                                    <input type="text" className="form-control" id="InputNome" placeholder="Digite seu nome" defaultValue={propsData[2]}/>
                                </div>

                                <div className="row">
                                    <div className="col-4">

                                        <div className="form-group">
                                            <label htmlFor="InputMtricula">Matrícula</label>
                                            <input type="text" className="form-control" id="InputMtricula" placeholder="12345" defaultValue={propsData[1]}/>
                                        </div>

                                    </div>
                                    <div className="col-8">

                                        <div className="form-group">
                                            <label htmlFor="InputEmail">E-mail</label>
                                            <input type="email" className="form-control" id="InputEmail" placeholder="exemplo@email.com" />
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-info float-right" data-dismiss="modal">
                                        <i className="fas fa-save"></i>&nbsp;&nbsp;Salvar
                                    </button>
                                </div>

                            </div>

                        </form>

                    </div>

                    <div className="modal-footer"></div>

                </div>
            </div>
        </div>
    )
}

export default FormCliente