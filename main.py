def ugh_we_gaan_lekker_naar_links():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, buitenWiel)
def ugh_we_gaan_lekker_naar_voren():
    DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, vooruit)
def ugh_ik_kom_tegen_jou_aan():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, binnenWiel)
def ugh_mijn_rechter_teen():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, buitenWiel)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, binnenWiel)
def ugh_ik_mijn_linker_teen():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, binnenWiel)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, buitenWiel)
def ugh_we_gaan_lekker_naar_rechts():
    DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, buitenWiel)
    DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, binnenWiel)
buitenWiel = 0
binnenWiel = 0
vooruit = 0
vooruit = 50
binnenWiel = 30
buitenWiel = 160

def on_forever():
    if DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        ugh_we_gaan_lekker_naar_voren()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        ugh_we_gaan_lekker_naar_links()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        ugh_we_gaan_lekker_naar_rechts()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 1 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        ugh_ik_kom_tegen_jou_aan()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 1 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        ugh_ik_mijn_linker_teen()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 1)))):
        ugh_mijn_rechter_teen()
        basic.pause(100)
    elif DFRobotMaqueenPlus.read_patrol(Patrol.L1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R1) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.R2) == 0 and (DFRobotMaqueenPlus.read_patrol(Patrol.L3) == 0 and DFRobotMaqueenPlus.read_patrol(Patrol.R3) == 0)))):
        while True:
            pass
    else:
        pass
basic.forever(on_forever)
