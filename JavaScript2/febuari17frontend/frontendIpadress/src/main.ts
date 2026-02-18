const url = 'http://localhost:3013/ip';

export type Ip = {
    ip: string,
    method: string,
    timestamp: `${string}-${string}-${string}-${string}-${string}`,
     typeBrowser: string
}

export type NewIp = {
    ip: string,
    method: string,
    timestamp: `${string}-${string}-${string}-${string}-${string}`,
    typeBrowser: string
}

const getIp = async ():Promise<Ip[]>=>{
    try{
        const res = await fetch(url);
        const ip:Ip[] = await res.json();
        console.log(ip)
        return ip;
    }
    catch(error){
        throw error;
    }
}

const renderTable = async () => {
    const tableBody = document.querySelector<HTMLTableSectionElement>('#ipTable tbody');
    if (!tableBody) return;

    const ips = await getIp();
    
    // Clear existing rows
    tableBody.innerHTML = '';

    ips.forEach(log => {
        const row = document.createElement('tr');

        const ipCell = document.createElement('td');
        ipCell.textContent = log.ip;

        const methodCell = document.createElement('td');
        methodCell.textContent = log.method;

        const timestampCell = document.createElement('td');
        timestampCell.textContent = log.timestamp;

        row.appendChild(ipCell);
        row.appendChild(methodCell);
        row.appendChild(timestampCell);

        tableBody.appendChild(row);
    });
};
window.addEventListener('DOMContentLoaded', renderTable);

getIp();