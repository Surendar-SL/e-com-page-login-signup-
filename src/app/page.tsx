'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import mobimage from '../../public/SlidePic1.jpg';
import Mobile from '../../public/mobile.png'
import Camera from '../../public/Camera.png'
import Laptop from '../../public/Laptop.png'
import Bluetooth from '../../public/Bluetooth.png'
import Tv from '../../public/tv.png'
import keyboard from '../../public/Keyboard.png'
import Pendrive from '../../public/Pendrive.png'
import styles from './page.module.css'
import { Box } from '@mui/material';
import Link from "next/link";

export default function Home() {
 

  return (
    <main className={styles.body_head}>
      <Container>
        <Row>
          <Col>
            <Image className={styles.slide_image} src={mobimage} alt='Mobimage' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Box className={styles.main_Electronic_box}>
              <h3 className={styles.Electronic_box_head}>Best Of Electronics</h3>
              <Box className={styles.sub_Electronic_box}>
                <Link href="/electronics/mobiles">
                <Image className={styles.Electronic_box_image} src={Mobile} alt='mobile' />
                <p className={styles.Electronic_box_para}>Mobiles</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹25000</b></p>
                </Link>

              </Box>
              
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={Laptop} alt='laptop' />
                <p className={styles.Electronic_box_para}>Laptop</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹68000</b></p>
              </Box>
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={Camera} alt='camera' />
                <p className={styles.Electronic_box_para}>Top Mirrorless Camera</p>
                <p className={styles.Electronic_box_para}><b>Shop Now!</b></p>
              </Box>
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={Bluetooth} alt='bluetooth' />
                <p className={styles.Electronic_box_para}>Bluetooth</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹1200</b></p>
              </Box>
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={Tv} alt='tv' />
                <p className={styles.Electronic_box_para}>MI Smart Tv</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹23000</b></p>
              </Box>
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={keyboard} alt='keyboards' />
                <p className={styles.Electronic_box_para}>Keyboard and Mouse</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹850</b></p>
              </Box>
              <Box className={styles.sub_Electronic_box}>
                <Image className={styles.Electronic_box_image} src={Pendrive} alt='pendrive' />
                <p className={styles.Electronic_box_para}>Pendrives</p>
                <p className={styles.Electronic_box_para}>From&nbsp;<b>₹550</b></p>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </main >
  );
}
