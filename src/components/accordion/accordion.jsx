import React, { useEffect, useState } from 'react';
import { IcoAdd, IcoMinus } from '..';
import './accordion.scss';

export const Accordion = ({
  data,
  tabSelect = '',
  actionTab=()=> null,
  type,
}) => {
  const [tabStateId, setTabStateId] = useState("");
  useEffect(() => {
    if (data) {
      const selectTab = data.filter(
        (e) => e.id === (tabSelect ? tabSelect : data[0].id)
      );
      if (selectTab.length) {
        setTabStateId(selectTab[0].id);
      }
    }
  }, [data, tabSelect]);

  return (
    <div className={`${type === 'custom' ? 'custom-tab' : 'box-tab'} `} data-cy={`Accordion${cy}FullContainer`}>
      {data?.map((e) => (
        <div 
        key={`accordion-${e.id}`} 
        className={e.id === tabStateId ? 'open' : ''}>
          <div
            className="accordion-header"
            onClick={() => [
              setTabStateId(tabStateId === e.id ? '' : e.id),
              actionTab(e.id),
            ]}
          >
            <h6 data-cy={`Accordion${cy}${e.id}Title`}>{e.title}</h6>
            <span data-cy={`Accordion${cy}${e.id}TitleIcon`}>{e.id === tabStateId ? <IcoMinus /> : <IcoAdd />}</span>
          </div>
          <div className="accordion-container">{e.content}</div>
        </div>
      ))}
    </div>
  );
};
