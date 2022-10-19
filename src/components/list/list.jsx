import React, { useEffect, useState } from 'react';
import './list.scss';

export const List = ({
  header,
  data,
  listCustom = () => null,
  noData = 'Sem informação',
}) => {
  const [listState, setListState] = useState([]);

  useEffect(()=>{
    setListState(data)
  }, [data])
  
  return (
    <div className="box-scrool">
      <table className="list-box">
        <thead>
          <tr>
            {header.map((header) => {
              return (
                <td className={header.className} key={header.column}>
                  {header.text}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            listState.map((container, i) => {
              listCustom(container, i, data);
              return (
                <tr key={container.id ? container.id : i}>
                  {header.map((header) => {
                    return (
                      <td
                        className={header.className}
                        key={`${container.id ? container.id : i}-${
                          header.column
                        }`}
                      >
                        {container[header.column]
                          ? container[header.column]
                          : ''}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={header?.length} className="text-center">
                {noData}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
