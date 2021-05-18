import React, {Component} from "react";


class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const {onChange} = this.props;
        return (
            <div>
                <input type="text" onChange={e => {
                    let val = e.target.value;
                    if (val == "" || val.charAt(val.length - 1).toLowerCase().search(new RegExp("[\\w ]")) != -1) {
                        onChange(val, this.props.diagnosis)
                    } else {
                        e.target.value = val.slice(0, val.length - 1); //removes the last letter
                    }
                    }}/>
                <select class="form-select" aria-label="Default select example" onChange={e => {
                    onChange(this.props.query, e.target.selectedOptions[0].value)
                }}>
                    <option value="" selected>Select A Diagnosis</option>
                    <option value=""> Select All</option>
                    <option value="Abdominal US Diagnosis">Abdominal US Diagnosis</option>
                    <option value="Pelvic Ultrasound Diagnosis">Pelvic Ultrasound Diagnosis</option>
                    <option value="Small Parts US Diagnosis">Small Parts US Diagnosis</option>
                    <option value="Soft Tissue US Diagnosis">Soft Tissue US Diagnosis</option>
                    <option value="Vascular US Diagnosis">Vascular US Diagnosis</option>
                    <option value="OB Ultrasound Diagnosis">OB Ultrasound Diagnosis</option>
                </select>
            </div>
        )
    }
}

export default Navbar;

