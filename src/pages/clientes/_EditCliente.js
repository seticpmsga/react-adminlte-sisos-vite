import { useRef, useEffect } from 'react'
import { Toast } from 'primereact/toast';
import api from '../../service/connection'
import { useNavigate } from "react-router-dom";

import 'primeicons/primeicons.css'
import './clientes.css'

import { useForm } from "react-hook-form"

function EditCliente(props) {
    /**
     * Observação: 
     * Rota API REST Kotlin http://localhost:8080/clientes/matricula/19813
     * Localiza o cliente através da matrícula 
     */

    const { register, handleSubmit, reset ,control, setValue, watch, formState: { errors } } = useForm({ mode: 'onBlur' })
    const toast = useRef(null)
    let navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            const response = await api.get('/clientes?matricula=' + data.matricula)

            if (response.data.length == 1) {
                putCliente(data)
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado !', life: 2000 })
            } else {
                console.log("Retorno:", response.data.length, "POST não recebe dados.")
                toast.current.show({ severity: 'error', summary: 'Erro de matrícula', detail: 'Matrícula informada já existe !', life: 2000 })
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    const putCliente = async (clienteData) => {
        try {
            const response = await api.put('/clientes/'+clienteData.id, clienteData);
            if (response) {
                console.log(response.status);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (props.ClienteData) {
            setValue("id", props.ClienteData['id']);
            setValue("nome", props.ClienteData['nome']);
            setValue("matricula", props.ClienteData['matricula']);
            setValue("email", props.ClienteData['email']);
        }
    }, [props.ClienteData]);

    return (
        <div className="modal fade" id="edit-cliente">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Editar Usuário</h4>
                        <button type="button" className="close" data-dismiss="modal"
                            aria-label="Close" onClick={() => {
                                    reset(undefined, { keepDirtyValues: false })
                                    navigate(0)
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

                                    <input type="text" className="form-control" id="InputId"
                                    {...register("id", { required: true })} hidden/>

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

export default EditCliente