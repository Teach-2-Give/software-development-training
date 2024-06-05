"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organization_controller_1 = require("../controller/organization.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
let organization_router = (0, express_1.Router)();
organization_router.post('/create-new', verifyToken_1.verifyToken, organization_controller_1.addOrganization);
organization_router.get('/all', verifyToken_1.verifyToken, organization_controller_1.getAllOrganizations);
organization_router.put('/update/:org_id', verifyToken_1.verifyToken, organization_controller_1.updateOrganization);
organization_router.get('/:org_id', verifyToken_1.verifyToken, organization_controller_1.getOneOrganization);
organization_router.delete('/delete/:org_id', verifyToken_1.verifyToken, organization_controller_1.deleteAnOrganization);
exports.default = organization_router;
