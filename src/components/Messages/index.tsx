import React from 'react';
import { MessageCircle } from '@styled-icons/evaicons-solid/MessageCircle';
import { ChevronUp } from '@styled-icons/bootstrap/ChevronUp';
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown';

import styles from './Messages.module.css';

const Messages: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`${styles.message} ${open && styles.message__open}`}>
      <h3>Messages</h3>
      <div className={styles.message__icon}>
        <MessageCircle
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            marginTop: '15px',
            marginRight: '15px',
          }}
          className={styles.message__iconMessage}
        />
        {open ? (
          <ChevronDown
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              marginTop: '15px',
              marginRight: '15px',
            }}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <ChevronUp
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              marginTop: '15px',
              marginRight: '15px',
            }}
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </div>
  );
};

export default Messages;
