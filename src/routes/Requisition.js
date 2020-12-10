import React from 'react';

const Requisition = () => {
    return (
        <section class="p-3 mb-5 outer-shadow requisition-section">
            <ul class="nav mt-4 nav-tabs justify-content-center outer-shadow" id="tabs" role="tablist">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        id="requisition-tab"
                        data-toggle="tab"
                        href="#requisition"
                        role="tab"
                        aria-controls="requisition"
                        aria-selected="true"
                    >
                        <i class="fas fa-file"></i>
                            Requisition
                        </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        id="conversation-tab"
                        data-toggle="tab"
                        href="#conversation"
                        role="tab"
                        aria-controls="conversation"
                        aria-selected="false"
                    >
                        <i class="fas fa-comment-dots"></i>
                                        Conversation
                                    </a>
                </li>
            </ul>
            <ul class="my-3 progress-circle justify-content-center">
                <li class="current">
                    <a href="">
                        <div class="circle inner-shadow-xs"></div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="circle inner-shadow-xs"></div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="circle inner-shadow-xs"></div>
                    </a>
                </li>
            </ul>
            <div class="tab-content mt-1 px-lg-3" id="myTabContent">
                <div
                    class="tab-pane fade show active"
                    id="requisition"
                    role="tabpanel"
                    aria-labelledby="requisition-tab"
                >
                    <h4 class="container mb-4 heading-4 ml-lg-3">Requisition Info</h4>
                    <form class="container px-lg-5">
                        <div class="form-group">
                            <label class="m-0 my-2" for="name">Name</label>
                            <input type="text" id="name" class="form-control inner-shadow-sm" />
                        </div>
                        <div class="form-group">
                            <label class="m-0 my-2" for="name">Date</label>
                            <input type="text" id="date" class="form-control inner-shadow-sm" />
                        </div>
                        <div class="form-group">
                            <label class="m-0 my-2" for="desc">Description</label>
                            <textarea class="form-control inner-shadow-sm" id="desc" rows="3"></textarea>
                        </div>
                        <section class="mt-3 overview">
                            <h5 class="py-3 heading-5">Receipts</h5>

                            <div class="form-row pb-3">
                                <div class="col-8 col-lg-9 py-2">
                                    <label for="file-upload" class="file-label outer-shadow-sm">Select File <i class="fas fa-chevron-down float-right"></i></label>
                                    <input type="file" id="file-upload" class="form-control" />
                                    <div class="progress md-progress inner-shadow-sm">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                    </div>
                                </div>
                                <div class="col-4 col-lg-3">
                                    <button class="btn btn-input-secondary-sm outer-shadow-sm"><i class="fas fa-upload mr-2"></i> Upload</button>
                                </div>
                            </div>
                            <div class="horizontal-scroll" style={{ overflowX: 'scroll', width: '100%' }}>
                                <div class="uploaded-files-container">
                                    <div class="uploaded outer-shadow-sm">
                                        <input type="text" value="Hotel Receipt" disabled />
                                        <div class="uploaded-actions">
                                            <i class="fas fa-pen gw-accent-color px-2"></i>
                                            <i class="fas fa-trash gw-danger-color px-2"></i>
                                        </div>
                                    </div>
                                    <div class="uploaded outer-shadow-sm">
                                        <input type="text" value="Hotel Receipt" disabled />
                                        <div class="uploaded-actions">
                                            <i class="fas fa-pen gw-accent-color px-2"></i>
                                            <i class="fas fa-trash gw-danger-color px-2"></i>
                                        </div>
                                    </div>
                                    <div class="uploaded outer-shadow-sm">
                                        <input type="text" value="Hotel Receipt" disabled />
                                        <div class="uploaded-actions">
                                            <i class="fas fa-pen gw-accent-color px-2"></i>
                                            <i class="fas fa-trash gw-danger-color px-2"></i>
                                        </div>
                                    </div>
                                    <div class="uploaded outer-shadow-sm">
                                        <input type="text" value="Hotel Receipt" disabled />
                                        <div class="uploaded-actions">
                                            <i class="fas fa-pen gw-accent-color px-2"></i>
                                            <i class="fas fa-trash gw-danger-color px-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <div class="form-row mt-3">
                            <div class="col-12 col-lg-6 my-3 my-lg-0">
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="checkbox" />
                                        <label class="custom-control-label pull-left" for="checkbox">Include Withholding<br />Tax</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="form-group">
                                    <label for="wtax">Withholding Tax %</label>
                                    <input type="number" id="wtax" class="form-control inner-shadow-sm" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between py-5">
                            <button type="button" class="btn btn-gw-secondary outer-shadow-sm" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-gw-primary outer-shadow-sm">Next</button>
                        </div>
                    </form>
                </div>
                <div
                    class="tab-pane fade"
                    id="conversation"
                    role="tabpanel"
                    aria-labelledby="conversation-tab"
                >
                    <section class="conversation">
                        <div class="d-flex justify-content-start my-5">
                            <div class="row mt-4">
                                <div class="col-2">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="" class="rounded-circle img-fluid" />
                                </div>
                                <div class="col-6 chat outer-shadow p-2">
                                    <h5 class="heading-5">
                                        Mercy Don Igwe
                                                        <span class="chat-time">10 mins ago</span>
                                    </h5>
                                    <p>Hello Yetunde I have raised the requisition for radio</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end my-5">
                            <div class="row mt-4">
                                <div class="col-6 chat outer-shadow p-2">
                                    <h5 class="heading-5">
                                        Yetunde Adeoye
                                                        <span class="chat-time">Just now</span>
                                    </h5>
                                    <p>Thanks Mercy I have seen the requisition you raised</p>
                                </div>
                                <div class="col-2">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="" class="rounded-circle img-fluid" />
                                </div>
                            </div>
                        </div>
                        <form class="container row message-form">
                            <input type="text" id="message" class="mt-2 col-8 form-control inner-shadow" />
                            <button class="btn btn-md btn-gw-primary">Send</button>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Requisition;