import React from 'react';
import Button from "../components/common/Button";

const DashboardPage = () => {
  return (
    <div>
      <section className="d-flex px-2">
        <a href="#0" className="align-self-center brand-name d-lg-none">gwapp</a>
        <a className="ml-auto rounded-circle inner-outer-shadow logout-icon">
          <i className="fas fa-power-off"></i>
        </a>
      </section>
      <section className="d-lg-none inner-shadow mt-5 px-2 py-4 sm-header">
        <div className="d-flex">
          <img className="col-4 rounded-circle mx-auto" alt="avatar" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
          <h3 className="heading-3 col-8 font-weight-bold w-50 align-self-center">Hello Adekunle Adelowo</h3>
        </div>
      </section>
      <section className="mt-5 overview px-lg-4">
        <h5 className="py-3 heading-5">This Month</h5>
        <div className="d-flex justify-content-between">
          <div className="inner-shadow column d-flex align-items-center justify-content-center py-3">
            <i className="fas fa-sync-alt fa-2x"></i>
            <div className="px-2 text-center">
              <h4 className="stat-header">234</h4>
              <p className="m-0 stat-desc">Pending</p>
            </div>
          </div>
          <div className="inner-shadow column d-flex align-items-center justify-content-center py-3">
            <i className="fas fa-eye fa-2x"></i>
            <div className="px-2 text-center">
              <h4 className="stat-header">12</h4>
              <p className="m-0 stat-desc">Checked</p>
            </div>
          </div>
          <div className="inner-shadow column d-flex align-items-center justify-content-center py-3">
            <i className="fas fa-sync-alt fa-2x"></i>
            <div className="px-2 text-center">
              <h4 className="stat-header">0</h4>
              <p className="m-0 stat-desc">Approved</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5  recent-act p-3 h-75 px-2 px-lg-4">
        <button className="btn btn-gw-circle float-right outer-shadow">
          <i className="fas fa-plus"></i>
        </button>
        <h5 className="mt-4 heading-5 ml-lg-2">Recent Activities</h5>
        <div className="activity">
          <div className="row mt-5 py-3 mx-0 mx-lg-2">
            <div className="col-lg-4 ">
              <p className="date m-0">13th June, 2020</p>
              <p className="desc m-0 mt-1">Transportation to and from Home to Radio House For Budeshi Show on 5th August 2020</p>
            </div>
            <div className="col-lg-5  det-container">
              <div className="col">
                <span>Amount</span>
                <h5 className="check-name mt-1">₦100,000</h5>
              </div>
              <div className="col">
                <span>Finance Checked</span>
                <p className="check-name">Yetunde Ojetunde</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center action-container">
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-pen"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-trash del-icon"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={
                <span><i className="fas fa-bell"></i><span className="badge shadow-none">2</span></span>
              } />
            </div>
          </div>
          <div className="row mt-5 py-3 mx-0 mx-lg-2">
            <div className="col-lg-4 ">
              <p className="date m-0">13th June, 2020</p>
              <p className="desc m-0 mt-1">Transportation to and from Home to Radio House For Budeshi Show on 5th August 2020</p>
            </div>
            <div className="col-lg-5  det-container pt-sm-3">
              <div className="col">
                <span>Amount</span>
                <h5 className="check-name mt-1">₦100,000</h5>
              </div>
              <div className="col">
                <span>Finance Checked</span>
                <p className="check-name">Pending</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center action-container">
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-pen"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-trash del-icon"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={
                <span><i className="fas fa-bell"></i><span className="badge shadow-none">2</span></span>
              } />
            </div>
          </div>
          <div className="row mt-5 py-3 mx-0 mx-lg-2">
            <div className="col-lg-4 ">
              <p className="date m-0">13th June, 2020</p>
              <p className="desc m-0 mt-1">Transportation to and from Home to Radio House For Budeshi Show on 5th August 2020</p>
            </div>
            <div className="col-lg-5  det-container">
              <div className="col">
                <span>Amount</span>
                <h5 className="check-name mt-1">₦100,000</h5>
              </div>
              <div className="col">
                <span>Approved By</span>
                <p className="check-name">Nkem Ilo</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center action-container">
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-check success-icon"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={
                <span><i className="fas fa-bell"></i><span className="badge shadow-none">2</span></span>
              } />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-print print-icon"></i>} />
            </div>
          </div>
          <div className="row mt-5 py-3 mx-0 mx-lg-2">
            <div className="col-lg-4 ">
              <p className="date m-0">13th June, 2020</p>
              <p className="desc m-0 mt-1">Transportation to and from Home to Radio House For Budeshi Show on 5th August 2020</p>
            </div>
            <div className="col-lg-5  det-container">
              <div className="col">
                <span>Amount</span>
                <h5 className="check-name mt-1">₦100,000</h5>
              </div>
              <div className="col">
                <span>Status</span>
                <p className="check-name">Payment Made</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center action-container">
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="far fa-money-bill-alt success-icon"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-trash del-icon"></i>} />
              <Button className="action-btn btn btn-gw-circle outer-shadow" innerText={<i className="fas fa-print print-icon"></i>} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default DashboardPage;