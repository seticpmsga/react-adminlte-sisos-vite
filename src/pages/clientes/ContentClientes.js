import ListClientes from "./_ListClientes";

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

                            {/* PrimeReact DataTable */}
                                <ListClientes />
                            {/* /. PrimeReact DataTable */}

                        {/* <!-- /.card-body --> */}
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
