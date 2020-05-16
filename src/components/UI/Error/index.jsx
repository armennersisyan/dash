import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import ErrorWrapper from './styles';

function Error({ error, children }) {
  const [show, setShow] = useState(false);

  const duration = 300;

  const defaultStyle = {
    overflow: 'hidden',
    transition: `${duration}ms ease-in-out`,
    opacity: 0,
    height: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    if (error) {
      setShow(true);
      return;
    } setShow(false);
  }, [error]);

  function handleEntering(e) {
    const childElementHeight = e.childNodes[0].getBoundingClientRect().height;
    requestAnimationFrame(() => {
      e.style.height = `${childElementHeight}px`;
    });
  }
  function handleExiting(e) {
    requestAnimationFrame(() => {
      e.style.height = 0;
    });
  }

  return (
    <Transition
      in={show}
      timeout={duration}
      unmountOnExit
      onEntering={handleEntering}
      onExiting={handleExiting}
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <ErrorWrapper>
            {children}
          </ErrorWrapper>
        </div>
      )}
    </Transition>
  );
}

Error.defaultProps = {
  error: null,
};

/* eslint react/forbid-prop-types: 0 */
Error.propTypes = {
  error: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Error;
