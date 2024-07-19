import { useRef, useEffect } from 'react'
import { Toast } from 'primereact/toast'
import api from '../../service/connection'
import { useNavigate } from "react-router-dom"

import 'primeicons/primeicons.css'
import './secretarias.css'

import { useForm } from "react-hook-form"

function EditSecretaria(props) {

    const { register, handleSubmit, reset ,control, setValue, watch, formState: { errors } } = useForm({ mode: 'onBlur' })
    const toast = useRef(null)
    let navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            const response = await api.get(`/secretarias/${data.id}`)

            if (response.data.length == 1) {
                putSecretaria(data)
                toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Secretaria cadastrado !', life: 2000 })
            } else {
                console.log("Retorno:", response.data.length, "POST não recebe dados.")
                toast.current.show({ severity: 'error', summary: 'Erro de matrícula', detail: 'Matrícula informada já existe !', life: 2000 })
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    const putSecretaria = async (secretariaData) => {
        try {
            const response = await api.put(`/secretarias/${secretariaData.id}`, secretariaData);
            if (response) {
                console.log(response.status);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (props.SecretariaData) {
            setValue("id", props.SecretariaData['id']);
            setValue("secretaria", props.SecretariaData['secretaria']);
            setValue("acronimo", props.SecretariaData['acronimo']);
        }
    }, [props.SecretariaData]);

    return (
        <div className="modal fade" id="edit-secretaria">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Editar Secretaria</h4>
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
                                    placeholder="Nome da secretaria" {...register("secretaria", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.secretaria && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}

                                    <input type="text" className="form-control" id="InputId"
                                    {...register("id", { required: true })} hidden/>

                                </div>

                                <div className="row">

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="InputAcronimo">Sigla <i style={{ color: '#EF5350' }}>*</i></label>
                                            <input type="text" className="form-control" id="InputAcronimo"
                                            placeholder="Ex.: SECOM" {...register("acronimo", { required: true })} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.acronimo && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}
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

export default EditSecretaria