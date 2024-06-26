import DataTableWithFilter from "./primereact_components/DataTableWithFilter";

function Clientes() {

    return (
        <div>
            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Gerenciar Clientes</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Clientes</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section>

                {/* <!-- Main content --> */}
                <section className="content">

                    {/* <!-- Default box --> */}
                    <div className="card">
                        {/* <div className="card-header">
                            <h3 className="card-title">Lista de Clientes</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div> */}
                        <div className="card-body">

                            {/* PrimeReact DataTable */}
                                <DataTableWithFilter/>
                            {/* /. PrimeReact DataTable */}

                        </div>
                        {/* <!-- /.card-body --> */}
                        {/* <div className="card-footer">
                            Footer
                        </div> */}
                        {/* <!-- /.card-footer--> */}
                    </div>
                    {/* <!-- /.card --> */}

                </section>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.content-wrapper --> */}

            {/* Continuar em https://primereact.org/datatable/
                # Advanced
                Assistir: https://www.youtube.com/watch?v=NbhoeLj6lBs
            */}

        </div>
    );
}

export default Clientes;
