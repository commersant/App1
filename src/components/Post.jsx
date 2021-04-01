import React from "react";
import {Link} from "react-router-dom";


function Tr(props){
    return <tr>
        <th scope="row">{props.index}</th>
        <td><Link to="/post">{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.date_added}</td>
    </tr>
}

export class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            posts1: []
        }
    }

    componentDidMount() {
        console.log("Компонет PostList отрисован");
        fetch("http://201.vozhzhaev.ru/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < 1; i++) {
                    // eslint-disable-next-line react/jsx-no-undef
                    rows.push(<Tr
                        index={i+1}
                        title={result[i].title}
                        author={result[i].author}
                        date_added={result[i].date_added}
                    />)
                }
                this.setState({
                    posts1: rows
                })
            })
    }

    render() { // Сначала вызывается рендер
        return (
        <table>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Заголовок</th>
            <th scope="col">Автор</th>
            <th scope="col">Дата добавления</th>
        </tr>
        </thead>
        <tbody>
        {this.state.posts1}
        </tbody>
        </table>
    )
    }
}