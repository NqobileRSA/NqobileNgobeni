import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import './UImode.css';
import { Navbar, Room } from './components/components';
import { About, Archives, Contact, Home, Projects } from './Pages/Pages';
import ParallexBG from './components/ParallexBG/ParallexBG';

const UImode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <Modal
          opened={opened}
          onClose={close}
          // title="This is a fullscreen modal"
          fullScreen
          radius={0}
          transitionProps={{ transition: 'fade', duration: 200 }}
        >
          <Room />
        </Modal>

        {/* <i
          className="bi bi-door-open"
          onClick={open}
          style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
            zIndex: "100",
            fontSize: "30px",
            cursor: "pointer",
          }}
        /> */}

        <ParallexBG />
        <Home />

        <About />
        <Projects />
        <Archives />
        <Contact />
      </main>
    </div>
  );
};

export default UImode;
