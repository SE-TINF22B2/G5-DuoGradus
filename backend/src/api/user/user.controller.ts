import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AutoGuard } from 'src/auth/auto.guard';

@Controller('user')
export class UserController {

    /**
     * /user/me
     * 
     * Returns information about the current User
     * 
     * @param req 
     * @returns 
     */
    @Get("/me")
    @UseGuards(AutoGuard)
    async me(@Request() req) {
        return req.user;
    }

}
