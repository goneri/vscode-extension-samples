import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Simple notifications
	const showInfoNotification = vscode.commands.registerCommand('notifications-sample.showInfo', async () => {
		const buttonLabel = "Start my Trial period, It's free!";
		const selection = await vscode.window.showInformationMessage("Oh! You don't have an active Lightspeed Subscription", buttonLabel);
		if (selection === buttonLabel) {
			vscode.commands.executeCommand(
			  "notifications-sample.OPEN_LIGHTSPEED_TRIAL_PAGE",
			);
		  }
		  return;
	});

	const openLightspeedTriagePage = vscode.commands.registerCommand('notifications-sample.OPEN_LIGHTSPEED_TRIAL_PAGE', () => {
		vscode.env.openExternal(vscode.Uri.parse("https://stage.ai.ansible.redhat.com/"));
	});




	context.subscriptions.push(showInfoNotification, openLightspeedTriagePage);
}
