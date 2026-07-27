import React from 'react';

const Counter1 = () => {
    return (
<div className="cs_counter cs_style_1 cs_gray_bg_1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="cs_counter_wrapper cs_bg_gradient text-center">
          <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
            <span data-count-to="530" className="odometer"></span>530+
          </div>
          <p className="cs_counter_title cs_fs_18 mb-0">
            Projects Delivered
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="cs_counter_wrapper text-center">
          <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
            <span data-count-to="98" className="odometer"></span>98%
          </div>
          <p className="cs_counter_title cs_fs_18 mb-0">
            Client Satisfaction
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="cs_counter_wrapper cs_bg_gradient text-center">
          <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
            <span data-count-to="10" className="odometer"></span>10+
          </div>
          <p className="cs_counter_title cs_fs_18 mb-0">
            Years Experience
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Counter1;