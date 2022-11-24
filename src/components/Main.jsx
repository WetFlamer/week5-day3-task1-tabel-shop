import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Main.module.css'
function Main(props){
    return (

        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price} ₽</td>
            <td>{props.left}</td>
            <td  className={styles.fix_w}><img  className={styles.images} src={props.image} alt="" /></td>
       <td className={styles.fix_w}>  <Button className={styles.button_buy} href="#">Купить</Button></td>
          </tr>
        </tbody>

    );
}

export default Main;