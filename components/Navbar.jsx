'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    className={`${styles.xPaddings} py-8 relative`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img className="w-[24px] h-[24px] object-contain" src="/search.svg" alt="search" />
      <h2 className="font-extrabold text-[24px] text-white">METAVERSUS</h2>
      <img className="w-[24px] h-[24px] object-contain" src="/menu.svg" alt="menu" />
    </div>
  </motion.nav>
);

export default Navbar;
