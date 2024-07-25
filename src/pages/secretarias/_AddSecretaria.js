import { useRef } from 'react'
import { Toast } from 'primereact/toast';
import api from '../../service/connection'
import { useNavigate } from "react-router-dom";

import 'primeicons/primeicons.css'
import './secretarias.css'

import { useForm } from "react-hook-form"

function AddSecretaria() {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            secretaria: "",
            acronimo: "",
            ativo: true
        }
    })
    const toast = useRef(null)
    let navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            const response = await api.post('/secretarias',data);
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Secretaria cadastrada !', life: 2000 })
            setTimeout(() => { $('#add-secretaria').modal('hide') }, 2000)
            setTimeout(() => { navigate(0) }, 2000)
            console.log(response.status)
        } catch (error) {
            console.log(response.status)
            toast.current.show({ severity: 'error', summary: 'Erro de cadastro', detail: 'Erro de cadastro !', life: 2000 })
            console.error(error.message)
        }

    }

    const postSecretaria = async (secretariaData) => {
        try {
            const response = await api.post('/secretarias',secretariaData);
            if(response) {
                console.log(response.status);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="modal fade" id="add-secretaria">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Cadastro de Usuário</h4>
                        <button type="button" className="close" data-dismiss="modal" 
                        aria-label="Close" onClick={() => {
                                reset(undefined, { keepDirtyValues: false })
                                setTimeout(() => { navigate(0) }, 2000)
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
                                    <label htmlFor="InputSecretaria">Nome da Secretaria <i style={{ color: '#EF5350' }}>*</i></label>
                                    <input type="text" className="form-control" id="InputSecretaria"
                                    placeholder="Secretaia Municipal ..." {...register("secretaria", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.secretaria && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}
                                </div>

                                <div className="row">

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="InputAcronimo">Sigla <i style={{ color: '#EF5350' }}>*</i></label>
                                            <input type="text" className="form-control" id="InputAcronimo"
                                            placeholder="Ex.: SEMURB ..." {...register("acronimo", { required: true })} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.acronimo && <p className='p-alert'><span><i className="pi pi-exclamation-triangle"></i>  Campo obrigatório !</span></p>}
                                        </div>
                                    </div>

                                    <div className="col-8"></div>

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

export default AddSecretaria