import React from "react";


function Home() {
    return (
        <div>
            <div id="showcase" className="d-flex align-items-center justify-content-center">
                <div id="overlay"></div>
                <div className="container text-white" id="header">
                    <h1 className="text-center display-1">MERN STACK</h1>
                    <p className="lead text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem molestias architecto doloribus dicta commodi fuga tempore sint natus neque.</p>
                </div>
            </div>

            <div className=" container my-5">
                <div className="row">
                    <div className="col-md-4 col-xl-4 col-sm-12 d-flex justify-content-center">
                        <div className="card border-0 " style={{ width: "300px" }}>
                            <img src="https://i.ya-webdesign.com/images/anima-drawing-wing-5.png" alt="" className="card-img-top" />
                            <div className="card-body text-center">
                                <h3 className="text-center mx-auto">Post</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint provident dolores sunt doloribus, ex natus! Architecto omnis unde eos cumque.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-xl-4 col-sm-12 d-flex justify-content-center">
                        <div className="card border-0 " style={{ width: "300px" }}>
                            <img src="https://www.freeiconspng.com/uploads/message-icon-png-14.png" alt="" className="card-img-top" />
                            <div className="card-body text-center">
                                <h3 className="text-center mx-auto">Messages</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint provident dolores sunt doloribus, ex natus! Architecto omnis unde eos cumque.</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-xl-4 col-sm-12 d-flex justify-content-center" style={{ marginBottom: "300px" }}>
                        <div className="card border-0" style={{ width: "300px", height: "200px" }}>
                            <img src="https://pngimg.com/uploads/hacker/hacker_PNG24.png" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="text-center mx-auto">Post</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint provident dolores sunt doloribus, ex natus! Architecto omnis unde eos cumque.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div id="showcase2" className="d-flex align-items-center justify-content-center">
                <div id="overlay2"></div>
                
            </div>


            <div id="showcase3" className="d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 col-md-6 col-sm-12 my-4">

                            <img src="https://images.unsplash.com/photo-1527418124353-ca783e9d1d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80" alt="" />

                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 my-4">
                            <h1 className="text-center">Mango App</h1>
                            <div className="lead">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sunt officia eum ducimus amet neque possimus odit? Facilis culpa minus debitis sapiente eaque hic inventore labore quasi totam, aliquid voluptates repellendus incidunt ducimus quisquam nesciunt vero quibusdam saepe quos provident repellat voluptate impedit at maxime. Laudantium cum, deleniti iste ipsa maiores non iure voluptas, nisi tempore recusandae qui officia ab explicabo itaque sequi at unde. Nostrum
                                </p>

                                <p>
                                    similique repellat porro, unde, tenetur quia ut magnam error pariatur quo qui nobis non atque eos facere facilis adipisci obcaecati alias ratione. Rerum omnis impedit quasi nisi est aspernatur harum nemo quod dolorem doloremque.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corrupti minima ea ducimus eaque animi deserunt tenetur sunt laborum voluptatum.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;