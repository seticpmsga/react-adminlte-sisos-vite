import { useRef } from 'react'
import { Toast } from 'primereact/toast';
import api from '../../service/connection'
import { useNavigate } from "react-router-dom";

import 'primeicons/primeicons.css'
import './clientes.css'

import { useForm } from "react-hook-form"

function AddCliente() {
    /**
     * Observação: 
     * Rota API REST Kotlin http://localhost:8080/clientes/matricula/19813
     * Localiza o cliente através da matrícula 
     */

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
          nome: "",
          matricula: "",
          email: "",
          ativo: true,
        }
      })
    const toast = useRef(null)
    let navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            const response = await api.get('/clientes?matricula=' + data.matricula)

            if (response.data.length != 1) {
                postCliente(data)
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado !', life: 3000 })
                setTimeout(() => { $('#add-cliente').modal('hide') }, 3000)
                setTimeout(() => { navigate(0) }, 3000)
            } else {
                console.log(response.status)
                toast.current.show({ severity: 'error', summary: 'Erro de matrícula', detail: 'Matrícula informada já existe !', life: 3000 })
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    const postCliente = async (clienteData) => {
        try {
            const response = await api.post('/clientes',clienteData);
            if(response) {
                console.log(response.status);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="modal fade" id="add-cliente">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Cadastro de Usuário</h4>
                        <button type="button" className="close" data-dismiss="modal" 
                        aria-label="Close" onClick={() => {
                                reset(undefined, { keepDirtyValues: false })
                                setTimeout(() => { navigate(0) }, 1000);
                            }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        {/* FORM */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="card-body">

                                <p className='p-info'>[ * Campos Obrigatórios ]</p>

                                <div className="form-group">
                                    <label htmlFor="InputNome">Nome <i style={{ color: '#EF5350' }}>*</i></label>
                                    <input type="text" className="form-control" id="InputNome"
                                    placeholder="Digite seu nome" {...register("nome", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.nome && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}
                                </div>

                                <div className="row">

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="InputMtricula">Matrícula <i style={{ color: '#EF5350' }}>*</i></label>
                                            <input type="text" className="form-control" id="InputMtricula"
                                            placeholder="12345" {...register("matricula", { required: true })} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.matricula && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}
                                        </div>
                                    </div>

                                    <div className="col-8">
                                        <div className="form-group">
                                            <label htmlFor="InputEmail">E-mail</label>
                                            <input type="email" className="form-control" id="InputEmail"
                                            placeholder="exemplo@email.com" {...register("email")} />
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <input type="submit" className="btn btn-info float-right" value="Salvar" />
                                </div>

                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        <div className="card flex justify-content-center">
                            <Toast ref={toast} position="top-center"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCliente