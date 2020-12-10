import React from 'react';
import pp from "../images/pp.jpg";
import sig from "../images/sig.jpg";
import "../styles/settings.css";
import Button from "../components/common/Button";
import FileInput from "../components/common/FileInput";

const Settings = () => {
  return (
    <div>
      <section class="d-flex px-2">
        <a class="align-self-center brand-name d-lg-none">gwapp</a>
        <a class="ml-auto rounded-circle inner-outer-shadow logout-icon">
          <i class="fas fa-power-off"></i>
        </a>
      </section>
      <section class="profile-section px-lg-5">
        <h4 class="heading-4 my-4">My Profile</h4>
        <div class="row py-lg-4">
          <div class="col-lg-6">
            <div class="row my-5 my-lg-0 px-5 px-lg-0">
              <div class="col-6 d-flex align-items-center pl-lg-5">
                <div class='avatar-container inner-shadow-sm'>
                  <img class="profile-avatar" src={pp} alt="" />
                </div>
              </div>
              <div class="col-6 id d-flex flex-column  justify-content-center">
                {/* <label class="file-input-label outer-shadow-sm" for="profile-pic">Select Profile Pic <i class="fas fa-angle-down ml-auto gw-accent-color"></i></label>
                <input class='file-input' type="file" name="profile-pic" id="profile-pic" /> */}
                <FileInput />
                <Button className="btn btn-sm btn-gw-primary" innerText={<span><i class="fas fa-upload"></i> Upload</span>} />                
              </div>

            </div>
          </div>
          <div class="col-lg-6">
            <div class="row my-5 my-lg-0 px-5 px-lg-0">
              <div class="col-6 d-flex align-items-center pl-lg-5">
                <div class='avatar-container inner-shadow-sm'>
                  <img class="profile-avatar" src={sig} />
                </div>
              </div>
              <div class="col-6 id d-flex flex-column r justify-content-center">
                <label class="file-input-label outer-shadow-sm" for="profile-pic">Select Signature  <i class="fas fa-angle-down ml-auto gw-accent-color"></i></label>
                <input class='file-input' type="file" name="profile-pic" id="profile-pic" />
                <Button className="btn btn-sm btn-gw-primary" innerText={<span><i class="fas fa-upload"></i> Upload</span>} />                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="preferences-section px-lg-5">
        <h4 class="heading-4 my-4">Preferences</h4>
        <div class="preferences d-flex px-3 px-lg-5">
          <div class="gw-input-group mr-2 mr-lg-5">
            <label for="gw-label theme">Theme</label>
            <select class="browser-default custom-select gw-select outer-shadow-sm">
              <option selected>Select Theme</option>
              <option value="1">Dark</option>
              <option value="2">Light</option>

            </select>
          </div>
          <div class="gw-input-group mb-5 mr-2 mr-lg-5">
            <label for="gw-label theme">Receive Mail</label>
            <select class="browser-default custom-select gw-select outer-shadow-sm">
              <option value="1">Yes</option>
              <option value="2">No</option>

            </select>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings;