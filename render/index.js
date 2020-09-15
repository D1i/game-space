import { initTimer } from "./ breakBetweenRender";

const renderRequestQueue = [];

function addingRenderCustomer(customer) {
    renderRequestQueue.push(customer);
}

function startingRender(renderRequestQueue) {
    renderRequestQueue.forEach(renderCustomer)
}

function renderCustomer(customer) {
    customer.individualRender();
}

export function renderRequest(customer) {
    initTimer()
    renderRequestQueue.push(customer);

}