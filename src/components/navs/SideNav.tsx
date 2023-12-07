import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { toggleSideNav } from '../../store/slices/sideNav.slice';

function SideNav() {
  const sideNav = useSelector((state: ReducerType) => state.sideNav.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{sideNav.folded ? '접힘' : '열림'}</span>

      <button type='button' onClick={() => dispatch(toggleSideNav())}>
        {sideNav.folded ? '열기' : '접기'}
      </button>
    </div>
  );
}

export default SideNav;
