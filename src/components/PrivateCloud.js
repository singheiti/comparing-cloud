import React from "react";
import data from "../privateCloudData";

const PrivateCloud = () => {
    return(
        <div>
            <table className="private-cloud-table">
                <tr>
                    <th className="private-cloud-cell">Category</th>
                    <th className="private-cloud-cell">Services</th>
                    <th className="private-cloud-cell">AWS</th>
                    <th className="private-cloud-cell">Azure</th>
                    <th className="private-cloud-cell">Google Cloud Platform</th>
                    <th className="private-cloud-cell">IBM Cloud</th>
                    <th className="private-cloud-cell">Oracle</th>
                    <th className="private-cloud-cell">Alibaba Cloud</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index} className="private-cloud-row">
                        <td className="private-cloud-cell">{item.category}</td>
                        <td className="private-cloud-cell">{item.services}</td>
                        {item.aws ? 
                          <td className="private-cloud-cell">
                          <ul>
                              {item.aws.map((aws, i) => (
                                  <li>{aws}</li>
                              ))}
                          </ul>
                      </td>
                         : <td></td>}
                        {item.azure ? (
                             <td className="private-cloud-cell">
                             <ul>
                                 {item.azure.map((azure, i) => (
                                     <li>{azure}</li>
                                 ))}
                             </ul>
                         </td>
                        ) : <td></td>}
                        {item.gcp ? (
                              <td className="private-cloud-cell">
                              <ul>
                                  {item.gcp.map((gcp, i) => (
                                      <li>{gcp}</li>
                                  ))}
                              </ul>
                          </td>
                        ) : <td></td>}
                        {item.ibm_cloud ? (
                             <td className="private-cloud-cell">
                             <ul>
                                 {item.ibm_cloud.map((ibm_cloud, i) => (
                                     <li>{ibm_cloud}</li>
                                 ))}
                             </ul>
                         </td>
                        ) : <td></td>}
                        {item.oracle ? (
                            <td className="private-cloud-cell">
                            <ul>
                                {item.oracle.map((oracle, i) => (
                                    <li>{oracle}</li>
                                ))}
                            </ul>
                        </td>
                        ) : <td></td>}
                        {item.alibaba_cloud ? (
                            <td className="private-cloud-cell">
                                <ul>
                                    {item.alibaba_cloud.map((alibaba_cloud, i) => (
                                        <li>{alibaba_cloud}</li>
                                    ))}
                                </ul>
                            </td>
                        ) : <td></td>}
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PrivateCloud;