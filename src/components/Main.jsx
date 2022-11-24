import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Main.module.css'
function Main(props){
    return (

        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.left}</td>
            <td><img src={props.image} alt="" /></td>
       <td>     <Button className={styles.button_buy} variant="primary" size="lg">
          Купить
        </Button></td>
          </tr>
        </tbody>

    );
}

export default Main;