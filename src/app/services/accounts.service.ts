import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({providedIn: 'root'})

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

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addAccount(nameParam: string, statusParam: string) {
        this.accounts.push({name: nameParam, status: statusParam});
        this.loggingService.logStatusChange(statusParam)
    }

    updateStatus(idParam: number, statusParam: string) {
        this.accounts[idParam].status = statusParam
        this.loggingService.logStatusChange(statusParam)
    }
}