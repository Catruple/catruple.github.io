"""Check catalog destinations. Export project ids/URLs to JSON with Node first."""
import concurrent.futures, datetime, json, sys, urllib.request, subprocess
from pathlib import Path
projects=json.loads(subprocess.check_output(['node', '--experimental-strip-types', '--input-type=module', '-e', "import {PROJECT_LIST} from './src/data/projects.ts'; console.log(JSON.stringify(PROJECT_LIST.map(({id,url})=>({id,url}))))"], text=True))
def check(project):
    try:
        request=urllib.request.Request(project['url'],method='HEAD',headers={'User-Agent':'Catruple-link-check/1.0'})
        with urllib.request.urlopen(request,timeout=25) as response:
            return project['id'],{'url':project['url'],'checkedAt':datetime.datetime.now(datetime.timezone.utc).date().isoformat(),'status':response.status}
    except Exception as error:
        return project['id'],{'url':project['url'],'error':str(error)}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    results=dict(pool.map(check,projects))
Path('src/data/link-checks.json').write_text(json.dumps(results,indent=2)+'\n')
print(json.dumps({key:value for key,value in results.items() if 'error' in value},indent=2))
print('Checked',len(results),'destinations')
