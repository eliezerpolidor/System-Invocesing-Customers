let invoices = [{
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/08/2022"
    },
    {
        name: "Macro La Yaguara  - Venezuela",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2023"
    },
    {
        name: "Spermercado Dia a Dia",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2022"
    },
    {
        name: "Bodegon Las Mercedes",
        number: 1997,
        amount: "$14,000",
        due: "09/01/2023"
    },
    {
        name: "Supermercado Plaza Vista Alegre Venezuela",
        number: 1998,
        amount: "$4,600",
        due: "01/27/2023"
    }
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(number) {
    return invoices.find(
        invoice => invoice.number === number
    );
}

export function deleteInvoice(number) {
    invoices = invoices.filter(
        invoice => invoice.number !== number
    );
}