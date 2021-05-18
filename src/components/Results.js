import React, {Component} from "react";


class Results extends Component {
    render () {
        const {data} = this.props;
        const dataUI = data.map(item => {
            const {title, type, description, note, dx} = item;
            const dxUI = <ul>
                {
                    dx.map(item => {
                        return (<li>{item}</li>)
                    })
                }
                </ul>
            return (
                <div class="card m-3">
                    <div class="card-body">
                    <div class = "row">
                        <div class="col">
                            <h4>{title}</h4>
                            <p>{type}</p>
                            <p>{description}</p>
                            <p class= "text-red">{note}</p>
                            </div>
                            
                            <div class="col">{dxUI}</div>
                        </div>
                    </div>
                </div>
            
            )
        })
        return (
            <div>
                {dataUI}
            </div>
        )
    }
}

export default Results;