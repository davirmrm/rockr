import React, { useEffect } from 'react';
import { useState } from 'react';
import './tab.scss';

export const Tab = ({ 
  data, 
  tabSelect = '', 
  actionTab, 
  type
}) => {
  const [tabState, setTabState] = useState([]);
  const [tabStateId, setTabStateId] = useState("");
  useEffect(() => {
    if (data) {
      const selectTab = data.filter(
        (e) => e.id === (tabSelect ? tabSelect : data[0].id)
      );
      if (selectTab.length) {
        setTabState(selectTab[0].content);
        setTabStateId(selectTab[0].id);
      }
    }
  }, [data]);

  return (
    <div className={type === 'custom' ? 'custom-tab' : 'box-tab'}>
      <div className="tab-head">
        {data?.map((e) => (
          <div
            key={e.id}
            className={e.id === tabStateId ? 'active' : ''}
            onClick={() => [
              setTabStateId(e.id),
              setTabState(e.content),
              actionTab(e.id),
            ]}
          >
            {e.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabState}</div>
    </div>
  );
};
