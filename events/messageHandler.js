import sender from './sender.js';

async function block(client, message) {
    try {
        const remoteJid = message.key.remoteJid;
        let target;

        if (message.message?.extendedTextMessage?.contextInfo?.quotedMessage){
            target = message.message.extendedTextMessage.contextInfo.participant;
        } else {
            const messageBody = message.message?.extendedTextMessage?.text || message.message?.conversation || '';
            const commandsAndArgs = messageBody.slice(1).trim();
            const args = commandsAndArgs.split(/\s+/).slice(1);

            if (!args[0]) return sender(client, remoteJid, "Usage:.block numero ou réponds à un message");
            target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        await client.updateBlockStatus(target, 'block');
        await sender(client, remoteJid, `✅ Numéro bloqué avec succès`);

    } catch (e) {
        console.log(e);
        await sender(client, remoteJid, "❌ Erreur lors du blocage");
    }
}

async function unblock(client, message) {
    try {
        const remoteJid = message.key.remoteJid;
        let target;

        if (message.message?.extendedTextMessage?.contextInfo?.quotedMessage){
            target = message.message.extendedTextMessage.contextInfo.participant;
        } else {
            const messageBody = message.message?.extendedTextMessage?.text || message.message?.conversation || '';
            const commandsAndArgs = messageBody.slice(1).trim();
            const args = commandsAndArgs.split(/\s+/).slice(1);

            if (!args[0]) return sender(client, remoteJid, "Usage:.unblock numero ou réponds à un message");
            target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        await client.updateBlockStatus(target, 'unblock');
        await sender(client, remoteJid, `✅ Numéro débloqué avec succès`);

    } catch (e) {
        console.log(e);
        await sender(client, remoteJid, "❌ Erreur lors du déblocage");
    }
}

export default { block, unblock };import configmanager from "../utils/configmanager.js"
import fs from 'fs/promises'
import group from '../commands/group.js'
import block from '../commands/block.js'
import viewonce from '../commands/viewonce.js'
//... tes autres imports

const premium = configmanager.config.premiumList || []; // <-- AJOUTE CETTE LIGNEcase 'auto-promote': // @cat: premium
    await react(client, message)
    if (premium.includes(number + "@s.whatsapp.net")) {
        await group.autoPromote(client, message)
    } else {
        await sender(client, message.key.remoteJid, "❌ Commande réservée aux premiums")
    }
    break

case 'auto-demote': // @cat: premium
    await react(client, message)
    if (premium.includes(number + "@s.whatsapp.net")) {
        await group.autoDemote(client, message)
    } else {
        await sender(client, message.key.remoteJid, "❌ Commande réservée aux premiums")
    }
    break

case 'auto-left': // @cat: premium
    await react(client, message)
    if (premium.includes(number + "@s.whatsapp.net")) {
        await group.autoLeft(client, message)
    } else {
        await sender(client, message.key.remoteJid, "❌ Commande réservée aux premiums")
    }
    break