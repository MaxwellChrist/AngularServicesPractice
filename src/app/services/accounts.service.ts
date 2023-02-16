export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    addAccount(nameParam: string, statusParam: string) {
        this.accounts.push({name: nameParam, status: statusParam});
    }

    updateStatus(idParam: number, statusParam: string) {
        this.accounts[idParam].status = statusParam
    }
}